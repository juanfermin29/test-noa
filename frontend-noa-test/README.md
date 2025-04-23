This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

npm run dev

NEXT_PUBLIC_BACKEND_API='http://localhost:3008'
NEXT_PUBLIC_FIND_CATEGORIES='http://localhost:1337/api/categories?fields[0]=name&pagination[page]=1&pagination[pageSize]=5'
NEXT_PUBLIC_STRAPI_BASE_API='http://localhost:1337'