// packages/ui/hooks/useApi.ts (ya jahan tu chahe)
import { useState } from "react";

type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";

interface UseApiOptions<TBody = any> {
  url: string;
  method?: Method;
  body?: TBody;
  headers?: HeadersInit;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export function useApi<TResponse = any, TBody = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const request = async ({
    url,
    method = "GET",
    body,
    headers,
    onSuccess,
    onError,
  }: UseApiOptions<TBody>) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const data = await res.json();

      if (!res.ok) throw data;

      onSuccess?.(data);
      return data as TResponse;
    } catch (err) {
      setError(err);
      onError?.(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}
