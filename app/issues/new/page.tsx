'use client';

import {Button, TextField} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import {useForm, Controller} from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import {useRouter} from "next/navigation";
import {Callout} from "@radix-ui/themes";
import {FiAlertCircle} from "react-icons/fi";
import {useState} from "react";

interface IssueForm {
    title: string,
    description: string
}

const Page = () => {
    const router = useRouter()
    const {register, control, handleSubmit} = useForm<IssueForm>();
    const [errorStatus, setErrorStatus] = useState('');

    return (
        <>
            {
                errorStatus && <Callout.Root color='red' className='max-w-xl'>
                    <Callout.Icon>
                        <FiAlertCircle/>
                    </Callout.Icon>
                    <Callout.Text>
                        {errorStatus}
                    </Callout.Text>
                </Callout.Root>
            }
            <form
                className='max-w-xl space-y-3 mt-3'
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post('/api/issues', data)
                        router.push('/issues');
                    } catch (error) {
                        setErrorStatus('Unexpected error occurred.')
                    }
                })}>
                <TextField.Root>
                    <TextField.Input placeholder="Title" {...register('title')} />
                </TextField.Root>
                <Controller
                    name='description'
                    control={control}
                    render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
                />
                <Button>Submit new Issue</Button>
            </form>
        </>
    );
};

export default Page;