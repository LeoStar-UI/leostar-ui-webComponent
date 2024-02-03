import { createBEM } from './bem';
export function createNamespace(name: string) {
  return [createBEM(name)];
}
