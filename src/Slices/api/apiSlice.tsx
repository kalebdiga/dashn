import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),
  endpoints: (builder) => ({
    getOtp: builder.mutation({
      query: (newItem) => ({
        url: "/chatbirrapi/ldapotp/dash/request/dashops",
        method: "POST",
        body: newItem,
        headers: {
          "Content-Type": "application/json",

          OTPFor: "login",
        },
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ otp, token }) => ({
        url: "/chatbirrapi/ldapotp/dash/confirm/dashops",
        method: "POST",
        body: { otpcode: otp },
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
          sourceapp: "ldapportal",
          otpfor: "login",
        },
      }),
    }),
    login: builder.mutation({
      query: ({ body, accesstoken }) => ({
        url: "/chatbirrapi/ldapauth/dash/pinops/passwordLogin",
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accesstoken}`,
          otpfor: "login",
          sourceapp: "ldapportal",
        },
      }),
    }),
  }),
});

export const { useGetOtpMutation, useVerifyOtpMutation, useLoginMutation } =
  apiSlice;
