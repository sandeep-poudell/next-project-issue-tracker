'use client';

import React from 'react';
import {Button, TextArea, TextField} from "@radix-ui/themes";

const Page = () => {
    return (
        <div className='max-w-xl space-y-3'>
            <TextField.Root>
                <TextField.Input placeholder="Title" />
            </TextField.Root>
            <TextArea placeholder="Description"/>
            <Button>Submit new Issue</Button>
        </div>
    );
};

export default Page;