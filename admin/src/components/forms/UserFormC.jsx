import {userInputs} from "../../formSource";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {ServerUrl} from "../../config/server";
import {z} from "zod";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const userSchemaUpdate = z.object({
    firstName: z.string().min(1, {message: "First name is required"}),
    lastName: z.string().min(1, {message: "Last name is required"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().optional().refine(value => !value || value.length >= 8, {
        message: "Password must be at least 8 characters long"
    }),
    role: z.enum(['APPRENANT', 'FORMATEUR'], {
        message: "Invalid role: must be one of (APPRENANT, FORMATEUR)"
    }).default('APPRENANT'),});

const userSchemaNew = z.object({
    firstName: z.string().min(1, {message: "First name is required"}),
    lastName: z.string().min(1, {message: "Last name is required"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
    role: z.enum(['APPRENANT', 'FORMATEUR'], {
        message: "Invalid role: must be one of (APPRENANT, FORMATEUR)"
    }).default('APPRENANT'),
});

export default function UserFormC({user, type = 'NEW'}) {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(type === 'NEW' ? userSchemaNew : userSchemaUpdate),
        defaultValues: user
    });

    useEffect(() => {
        console.log(errors)
    }, [errors]);

    const addUser = async (data) => {
        await axios.post(`${ServerUrl}/users/register`, data)
    }

    const updateUser = async (data) => {
        if (data.password === "" || !data.password)
            delete data.password
        data._id = user._id
        await axios.put(`${ServerUrl}/users/${data._id}`, data)
    }

    const onSubmit = async (values) => {
        if (type === 'NEW') {
            await addUser(values)
            toast.success('User added successfully')
        } else if (type === 'UPDATE') {
            await updateUser(values)
            toast.success('User updated successfully')
        }
        navigate('/users')
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{width: "70%"}}>
            {
                userInputs.map((input) => (
                    <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <input
                            type={input.type}
                            placeholder={input.placeholder}
                            {...register(input.name)}
                        />
                        <p>{errors[input.name]?.message}</p>
                    </div>
                ))
            }
            <div className="formInput">
                <label>Role</label>
                <select {...register('role')} >
                    <option value="">Sélectionnez votre rôle</option>
                    <option value="APPRENANT">APPRENANT</option>
                    <option value="FORMATEUR">FORMATEUR</option>
                </select>
                <p>{errors['role']?.message}</p>
            </div>
            <button>{type === 'NEW' ? 'Create' : 'Update'}</button>
        </form>
    )
}