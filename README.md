# NextAuth Session Undefined on Client-Side in Next.js 15

This repository demonstrates a bug where NextAuth session data is not properly passed to the client-side in a Next.js 15 application using `getServerSideProps`. The session object is correctly populated on the server, but it is undefined when accessed in the client-side component.  This issue occurs even when using `unstable_getServerSession` from `next-auth/next`.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`. You'll observe that the session data is not displayed on the client.