Typescript
--------------------------------------------------------------------------------------------

    Typescript = JavaScript + Types

    Lab Setup

        tsc         typescript compiler

        compiling .ts into .js is called transpelling

    Creating a project:

        npm init -y
        npm i Typescript --save-dev

        npx tsc --init

        npx tsc filename.ts 

    Datatypes

        number
        string
        boolean
        bigint
        symbol

    Special Datatypes

        any
        unknown
        never
        undefined
        null

    Standard tsconfig

        {
            "compilerOptions": {
                "module": "commonjs",
                "esModuleInterop": true,
                "target": "es6",
                "moduleResolution": "node",
                "sourceMap": false,
                "outDir": "dist"
            },
            "lib": ["es2015"]
        }
