import express from "express";
import dotenv from "dotenv";
dotenv.config();

export const username = process.env.ADMIN_USERNAME;
export const passwordHash = process.env.ADMIN_PASSWORD;
