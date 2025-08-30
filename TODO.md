# Fix TypeScript Error in auth.ts

## Steps to Complete:
- [x] Analyze the issue: Inferred type of 'auth' cannot be named without reference to node_modules/next-auth/lib
- [x] Read the auth.ts file to understand current implementation
- [x] Read the next-auth.d.ts file to understand custom type definitions
- [x] Search for usage patterns of auth function
- [x] Fix the type annotation issue in apps/web/lib/auth.ts
- [ ] Check if any other files need to be updated to use the new export pattern
- [ ] Test the fix (if possible)

## Current Status:
- Issue identified: TypeScript compilation error due to inferred type from NextAuth
- Solution: Add explicit type annotation to auth export
- Plan approved by user
