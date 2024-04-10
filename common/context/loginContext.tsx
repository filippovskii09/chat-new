'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type LoginContextType = {
	isLogin: boolean,
	setIsLogin: Dispatch<SetStateAction<boolean>>
}

export const LoginContext = createContext<LoginContextType>({ isLogin: false, setIsLogin: () => {} })

type LoginContextProviderProps = {
	children: ReactNode;
}

export const LoginContextProvider = ({children}: LoginContextProviderProps) => {
	const [isLogin, setIsLogin] = useState<boolean>(false)
	return (
	<LoginContext.Provider value={{isLogin, setIsLogin}}>
		{children}
	</LoginContext.Provider>)
}