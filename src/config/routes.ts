


export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;


const routes = {
    home : "/",
    dashboard : "/dashboard",
    habit : (habitId : string) => `/dashboard/${habitId}`,
};


export default routes;