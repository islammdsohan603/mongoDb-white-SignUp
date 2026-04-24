'use client';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getPosts } from '@/database/bd';

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const posts = getPosts(); // 👈 data load

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/signUp');
    }
  }, [session, isPending, router]);

  if (isPending) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-10">
      <h1 className="text-3xl font-bold mb-10">📊 Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((item, i) => (
          <div key={i} className="p-6 bg-white/5 rounded-2xl backdrop-blur">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-400 text-sm mt-2">{item.role}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-purple-500/20 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
