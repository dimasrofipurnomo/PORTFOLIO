"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function LocalizedNotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <Card variant="pink" className="max-w-md w-full shadow-[8px_8px_0px_rgba(0,0,0,1)] text-black text-center p-8 space-y-6">
        <CardHeader className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-black text-neo-pink neo-border flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <AlertCircle className="w-8 h-8 stroke-[2.5px]" />
          </div>
          <CardTitle className="text-4xl font-black uppercase tracking-tight">
            404
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-black uppercase">
              Page Not Found
            </h2>
            <p className="text-xs font-bold text-black/75 leading-relaxed">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="border-t-2 border-black/10 my-4" />
            <h2 className="text-xl font-black uppercase">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-xs font-bold text-black/75 leading-relaxed">
              Halaman yang Anda cari tidak ada atau telah dipindahkan.
            </p>
          </div>

          <Link href="/" className="inline-block mt-4">
            <Button variant="white" className="flex items-center gap-2 font-black">
              <ArrowLeft className="w-4 h-4 stroke-[2.5px]" />
              Back to Home / Kembali
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
