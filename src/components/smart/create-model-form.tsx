"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    organization: z.string().min(1),
    task: z.enum([
        "text-generation",
        "image-classification",
        "image-generation",
    ]),
    description: z.string(),
});

export function CreateModelForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: "",
            name: "",
            organization: "",
            task: "text-generation",
            description: "",
        },
    });

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
        setSubmitted(true);
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="id"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ID</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="请输入模型ID"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    模型的唯一标识符
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>名称</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="请输入模型名称"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>模型的名称</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>组织</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="请输入组织名称"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    模型的组织名称
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="task"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>任务</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue>
                                                {field.value}
                                            </SelectValue>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="text-generation">
                                            文本生成
                                        </SelectItem>
                                        <SelectItem value="image-classification">
                                            图像分类
                                        </SelectItem>
                                        <SelectItem value="image-generation">
                                            图像生成
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    模型的任务类型
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>描述</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="请输入模型描述"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>模型的描述</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">提交</Button>
                </form>
            </Form>
            {submitted && (
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>注意</AlertTitle>
                    <AlertDescription>这只是一个前端的DEMO</AlertDescription>
                </Alert>
            )}
        </>
    );
}
