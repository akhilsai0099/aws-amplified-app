"use server";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";
import config from "@/amplifyconfiguration.json";
const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

export async function createTodo(formData: FormData) {
  const { data } = await cookiesClient.graphql({
    query: mutations.createTodo,
    variables: {
      input: {
        name: formData.get("name")?.toString() ?? "",
      },
    },
  });

  console.log("Created Todo: ", data?.createTodo);

  revalidatePath("/");
}
export async function deleteTodo(todoId: string) {
  console.log("inside delete todo");
  const { data, errors } = await cookiesClient.graphql({
    query: mutations.deleteTodo,
    variables: {
      input: {
        id: todoId,
      },
    },
  });
  console.log(errors);
  revalidatePath("/");
}

export async function queryTodos() {
  const { data, errors } = await cookiesClient.graphql({
    query: queries.listTodos,
  });
  return { data, errors };
}

export async function updateTodo(todoId: string, name: string) {
  console.log("inside delete todo");
  const { data, errors } = await cookiesClient.graphql({
    query: mutations.updateTodo,
    variables: {
      input: {
        id: todoId,
        name: name,
      },
    },
  });
  console.log(errors);
  revalidatePath("/");
}
