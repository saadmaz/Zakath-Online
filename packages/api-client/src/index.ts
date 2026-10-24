import {
  exampleResponseSchema,
  healthResponseSchema,
  type ExampleResponse,
  type HealthResponse
} from '@zakath-online/validators';

export type ApiClient = ReturnType<typeof createApiClient>;

export function createApiClient(baseUrl: string) {
  return {
    async health(): Promise<HealthResponse> {
      const response = await fetch(`${baseUrl}/health`);
      const json = await response.json();
      return healthResponseSchema.parse(json);
    },
    async example(name?: string): Promise<ExampleResponse> {
      const search = name ? `?name=${encodeURIComponent(name)}` : '';
      const response = await fetch(`${baseUrl}/v1/example${search}`);
      const json = await response.json();
      return exampleResponseSchema.parse(json);
    }
  };
}
