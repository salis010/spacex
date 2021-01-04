// This file is required in order for the TypeScript compiler not to complain with image imports like the below:
// import edit from './edit.png'

declare module "*.png" {
    const value: any;
    export default value;
}
