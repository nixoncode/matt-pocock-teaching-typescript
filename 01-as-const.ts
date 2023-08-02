const routes = {
    home: "/",
    admin: "/admin",
    users: "/users",
} as const;

// we cant do key of routes because we need to convert it first (from runtime world to type world)
type Route = (typeof  routes)[keyof  typeof routes]
const goToRoute = (route: Route) => {};

goToRoute(routes.admin)

//Q. `as const`  is different from `as`
//A. `as const` is a const assertion while as is just an `as` assertion


//Q. Alternative to enums
// A. little bit troublesome as they are not JS native, `as` is preferred. Avoid const enums

//Q. Return value of hooks `as const`
// A. -> see below

const useCustomeHokk = () => {
    const value = "123";
    const setValue = () => {};

    return [value, setValue] as const;
}

const [value, setValue] = useCustomeHokk();
value.toUpperCase();


/* MORE:
* totally badass
* you get to code the way TS compiler understand your code
*/




