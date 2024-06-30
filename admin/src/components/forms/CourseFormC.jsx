import { courseInputs } from "../../formSource";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ServerUrl } from "../../config/server";
import { z } from "zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const parcoursSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
});

export default function     CourseFormC({ course, type = 'NEW', parcourId }) {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(parcoursSchema),
        defaultValues: course
    });
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(e.target.files[0]);

        const reader = new FileReader();
        reader.readAsDataURL(file);
    };


    const addCourse = async (data) => {
        await axios.post(`${ServerUrl}/parcours/${parcourId}/courses`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    };

    const updateCourse = async (data) => {
        if (data.file === '' || !data.file ) {
            delete data.file;
        }
        data._id = course._id;
        await axios.put(`${ServerUrl}/parcours/${parcourId}/courses/${data._id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        });
    };

    const onSubmit = async (values) => {
        values.fileUpload = file;
        if (type === 'NEW') {
            await addCourse(values);
            toast.success('Course added successfully');
        } else if (type === 'UPDATE') {
            await updateCourse(values);
            toast.success('Course updated successfully');
        }
        navigate(`/parcours/${parcourId}/courses`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "70%" }}>
            {courseInputs.map((input) => (
                <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(input.name)}
                        onChange={(e) => {
                            if (input.type === 'file') {
                                handleFileChange(e);
                            }
                        }}
                    />
                    <p>{errors[input.name]?.message}</p>
                </div>
            ))}
            <button>{type === 'NEW' ? 'Create' : 'Update'}</button>
        </form>
    );
}
