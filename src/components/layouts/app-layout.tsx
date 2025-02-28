import { AppFooter } from "./app-footer";
import { AppHeader } from "./app-header"

export const AppLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="flex min-h-screen flex-col ">
            <AppHeader/>
            <main className="flex bg-gray-100 flex-col items-center justify-center flex-1 gap-[20px] px-[18px] py-[20px]">
                {children}
            </main>
            <AppFooter/>
        </div>
    );
};
