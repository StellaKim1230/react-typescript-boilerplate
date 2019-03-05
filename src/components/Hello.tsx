import React from 'react'

export interface HelloProps { title: string }

export const Hello = (props: HelloProps) =>
 <h1> {props.title} </h1>
