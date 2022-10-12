import React from "react";

export default interface Header{
    children: React.ReactNode
    isLogged: boolean,
    logout: Function
}