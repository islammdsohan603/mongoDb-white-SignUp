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

import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push('/signin');
        },
      },
    );

    console.log(data);
    console.log(error);
  };

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center text-4xl font-bold my-10">SignUp Page</h1>

      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          name="name"
          type="name"
          isRequired
          validate={value => {
            if (value.length < 3) {
              return 'Name must be at least 3 characters';
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input name="name" placeholder="John Doe" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={value => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return 'Please enter a valid email address';
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="password"
          minLength={8}
          type="password"
          validate={value => {
            if (value.length < 8) {
              return 'Password must be at least 8 characters';
            }
            if (!/[A-Z]/.test(value)) {
              return 'Password must contain at least one uppercase letter';
            }
            if (!/[0-9]/.test(value)) {
              return 'Password must contain at least one number';
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input name="password" placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
