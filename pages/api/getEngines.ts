// Next.js API route support: https://nextjs.org/docs.api-routes/ntroduction
import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";

type Option = {
    value: string;
    label: string;
};

type Data = {
    moduleOptions: Option[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
    const models = await openai.listModels().then((res) => res.data.data);

    const moduleOptions = models.map((model) => ({
        value: model.id,
        label: model.id,
    }));

    res.status(200).json({
        moduleOptions,
    });
}