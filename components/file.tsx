"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { createClient } from "@/utils/supabase/client";
export function FileUploadDemo({
  handleFileUpload,
}: {
  handleFileUpload: any;
}) {
  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
}
