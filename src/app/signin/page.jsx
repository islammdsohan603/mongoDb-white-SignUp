'use client';

import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

import { Eye, EyeSlash } from '@gravity-ui/icons';
import { InputGroup } from '@heroui/react';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/',
    });

    console.log(data);
    console.log(error);
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center text-4xl font-bold my-10">Sign In Page</h1>

      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input name="email" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField className="w-full max-w-2xs" name="password">
          <Label>Password</Label>

          <InputGroup>
            <InputGroup.Input
              name="password"
              type={isVisible ? 'text' : 'password'}
              placeholder="Enter password"
            />

            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? 'Hide password' : 'Show password'}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Login
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
