'use client';

import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from '@heroui/react';

export default function SignUp() {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email(
      { name, email, password },
      {
        onSuccess: () => router.push('/signin'),
      },
    );

    console.log(data, error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl border border-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        <Form onSubmit={onSubmit} className="space-y-4">
          <TextField name="name" isRequired>
            <Label>Name</Label>
            <Input name="name" placeholder="John Doe" />
            <FieldError />
          </TextField>

          <TextField name="email" isRequired>
            <Label>Email</Label>
            <Input name="email" placeholder="you@example.com" />
            <FieldError />
          </TextField>

          <TextField name="password" isRequired>
            <Label>Password</Label>
            <Input name="password" type="password" />
            <Description>Min 8 chars</Description>
            <FieldError />
          </TextField>

          <Button type="submit" className="w-full">
            <Check /> Create Account
          </Button>
        </Form>
      </div>
    </div>
  );
}
