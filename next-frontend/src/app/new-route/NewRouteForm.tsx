"use client";

import { PropsWithChildren, useActionState } from "react";
import { ActionStateProps, createRouteAction } from "./create-route.action";

// type ActionStateProps = { error?: string; success?: boolean } | null;

export default function NewRouteForm(props: PropsWithChildren) {
  const [state, formAction] = useActionState<ActionStateProps>(
    createRouteAction,
    null
  );

  return (
    <form action={formAction}>
      {state?.error && (
        <div className="p-4 border rounded text-contrast bg-error">
          {state.error}
        </div>
      )}
      {state?.success && (
        <div className="p-4 border rounded text-contrast bg-success">
          Route created successfully
        </div>
      )}

      {props.children}
    </form>
  );
}
