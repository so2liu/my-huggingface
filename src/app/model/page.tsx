"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CreateModelForm } from "@/components/smart/create-model-form";
import { Button } from "@/components/ui/button";

const tasks = [
    { key: "all", name: "全部" },
    { key: "text-generation", name: "文本生成" },
    { key: "image-classification", name: "图像分类" },
    { key: "image-generation", name: "图像生成" },
];

const models = [
    {
        id: "qwen-7b-base",
        name: "通义千问7B",
        task: "text-generation",
        description:
            "通用领域的中文问答模型，基于7B中文语料训练，模型参数量为7.5B，模型效果优于GPT3。",
        updatedAt: "两个月前",
    },
    {
        id: "chatglm3-6b",
        name: "ChatGlm3-6B",
        task: "text-generation",
        description:
            "通用领域的中文闲聊模型，基于6B中文语料训练，模型参数量为6.5B，模型效果优于GPT3。",
        updatedAt: "三天前",
    },
];

const Model = () => {
    const [selectedTask, setSelectedTask] = useState<string>("all");

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl">
                    模型
                </h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>创建模型</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>创建模型</DialogTitle>
                            <DialogDescription>
                                创建一个模型仓库，以开启一段新的征程～
                            </DialogDescription>
                        </DialogHeader>
                        <CreateModelForm />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="flex items-start space-x-2">
                <div className="bg-gray-50 p-4 rounded-xl w-[300px] min-h-[200px]">
                    <Tabs defaultValue="task">
                        <TabsList className="mb-3">
                            <TabsTrigger value="task">任务</TabsTrigger>
                            <TabsTrigger value="password">证书</TabsTrigger>
                        </TabsList>
                        <TabsContent value="task">
                            <RadioGroup
                                className="block"
                                value={selectedTask}
                                onValueChange={setSelectedTask}
                                onSelect={console.log}
                            >
                                {tasks.map((task) => (
                                    <div
                                        key={task.key}
                                        className="inline-block mb-6 mr-3"
                                    >
                                        <RadioGroupItem
                                            value={task.key}
                                            id={task.key}
                                            className="peer sr-only"
                                        />
                                        <Label
                                            htmlFor={task.key}
                                            className="rounded-lg border-2 border-muted p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            onClick={() => {
                                                if (selectedTask === task.key) {
                                                    setSelectedTask("all");
                                                }
                                            }}
                                        >
                                            {task.name}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </TabsContent>
                        <TabsContent value="password">Placeholder</TabsContent>
                    </Tabs>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    {models
                        .filter((m) =>
                            selectedTask !== "all"
                                ? m.task === selectedTask
                                : true
                        )
                        .map((model) => (
                            <Card key={model.id}>
                                <CardHeader>
                                    <CardTitle>{model.name}</CardTitle>
                                    <CardDescription>
                                        {
                                            tasks.find(
                                                (task) =>
                                                    task.key === model.task
                                            )?.name
                                        }
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{model.description}</p>
                                </CardContent>
                                <CardFooter>
                                    更新于 {model.updatedAt}
                                </CardFooter>
                            </Card>
                        ))}
                </div>
            </div>
        </div>
    );
};
export default Model;
