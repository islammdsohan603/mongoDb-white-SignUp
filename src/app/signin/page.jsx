'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Check, Eye, EyeSlash } from '@gravity-ui/icons';
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from '@heroui/react';

export default function SignIn() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/',
    });

    if (data) router.push('/');
    console.log(error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl border border-gray-800">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        <Form onSubmit={onSubmit} className="space-y-4">
          <TextField name="email" isRequired>
            <Label>Email</Label>
            <Input name="email" placeholder="you@example.com" />
            <FieldError />
          </TextField>

          <TextField name="password" isRequired>
            <Label>Password</Label>

            <div className="relative">
              <Input
                name="password"
                type={isVisible ? 'text' : 'password'}
                className="pr-10"
              />

              <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {isVisible ? <Eye /> : <EyeSlash />}
              </button>
            </div>

            <FieldError />
          </TextField>

          <Button type="submit" className="w-full">
            <Check /> Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
