import {parcourseInputs} from "../../formSource";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {ServerUrl} from "../../config/server";
import {z} from "zod";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const parcoursSchema = z.object({
    title: z.string().min(1, {message: "Title is required"}),
    description: z.string().min(1, {message: "Description is required"}),
    price: z.string().min(1, {message: "Price is required"}),
    category: z.string().min(1, {message: "Category is required"}),
    trainer: z.string().min(1, {message: "Trainer is required"}),
    startDate: z.string().min(1, {message: "Start Date is required"}),
    endDate: z.string().min(1, {message: "End Date is required"}),
});

export default function ParcoursFormC({parcours, type = 'NEW'}) {
    const navigate = useNavigate();
    const [formateurs, setFormateurs] = useState([])
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(parcoursSchema),
        defaultValues: parcours
    });

    useEffect(() => {
        getFormateurs()
    }, []);

    const addParcour = async (data) => {
        await axios.post(`${ServerUrl}/parcours`, data)
    }

    const updateParcour = async (data) => {
        if (data.password === "" || !data.password)
            delete data.password
        data._id = parcours._id
        await axios.put(`${ServerUrl}/parcours/${data._id}`, data)
    }

    const getFormateurs = async () => {
        const res = await axios.get(`${ServerUrl}/users/role/FORMATEUR`)
        setFormateurs(res.data.users)
    }

    const addUserParcour = async (userId, parcourId) => {
        await axios.put(`${ServerUrl}/users/${userId}/parcour/${parcourId}`);
    }

    const onSubmit = async (values) => {
        if (type === 'NEW') {
            await addParcour(values)
            toast.success('Parcours added successfully')
        } else if (type === 'UPDATE') {
            await updateParcour(values)
            toast.success('Parcours updated successfully')
        }
        navigate('/parcours')
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{width: "70%"}}>
            {
                parcourseInputs.map((input) => (
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
                <label>Formateur</label>
                <select {...register('trainer')} >
                    <option value="">Select Formateur</option>
                    {
                        formateurs.map((formateur) => (
                            <option value={formateur._id}
                                    key={formateur._id}>{formateur.firstName + " " + formateur.lastName}</option>
                        ))
                    }
                </select>
            </div>
            <button>{type === 'NEW' ? 'Create' : 'Update'}</button>
        </form>
    )
}