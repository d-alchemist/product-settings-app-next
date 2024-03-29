"use client";
import LoadingModal from '@/app/components/LoadingModal';
import { useAuth } from '@/app/providers/AuthContext';
import { PAGES } from '@/utils/constants';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function ValidateUserPage() {
  const { handleAuthCallback, user } = useAuth();
  const router = useRouter();

  const searchParams = useSearchParams();
  const code = searchParams.get('code')

  useEffect(() => {
    if (code) {
      handleAuthCallback(code);
    }
    // No need to add the handleAuthCallback method to the deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);
  
  useEffect(() => {
    if (user?.email) {
      router.push(PAGES.settings);
    }
    // No need to add the router hook method to the deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <LoadingModal />
  )
}

