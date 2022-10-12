import React from "react"

export default interface Button {
    className: string,
    title: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}