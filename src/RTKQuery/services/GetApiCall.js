import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getApiCall = createApi({
    reducerPath:'getApiCall',
    baseQuery:fetchBaseQuery({baseUrl:'https://fakestoreapi.com'}),
    endpoints:(builder)=>({
        getData:builder.query({
            query:()=>({
                url:'products',
                method:'get'
            }),
        }),
        getDataById: builder.query({
            query: id =>({
                url:'products'+ '/' + id,
                method:'get'
            })
        }),
        addNewData: builder.mutation({
            query: data =>({
                url:'products',
                method:'post',
                body:data,
            })
        })
    })
});
export const {useGetDataQuery, useGetDataByIdQuery,useAddNewDataMutation}=getApiCall;