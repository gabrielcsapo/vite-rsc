import {
	AnyRoute,
	ParsePathParams,
	RootRoute,
	RouteOptions as RouteOptionsBase,
	TypedRoute,
} from "./router/types";

export { A } from "./router/A";
export * from "./router/useRouter";
export { default as Router } from "./router/Router";
export * from "./router/Router";
export * from "./router/useMutation";
export * from "./router/ErrorBoundary";
export * from "./router/Form";
export * from "./router/redirect";
export * from "./streams";
export type { PageProps } from "../types";

export type TypedRouteModule<
	TParentRoute extends AnyRoute = AnyRoute,
	TPath extends string = string,
	mod extends { default: any } = { default: any },
> = TypedRoute<
	TParentRoute,
	TPath,
	mod extends { config: { validateSearch: any } }
		? ReturnType<mod["config"]["validateSearch"]>
		: {},
	mod extends { config: { parseParams: any } }
		? ReturnType<mod["config"]["parseParams"]>
		: Record<ParsePathParams<TPath>, string>
>;

export type TypedRootRoute<mod extends { default: any }> = RootRoute<
	unknown,
	mod extends { config: { validateSearch: any } }
		? ReturnType<mod["config"]["validateSearch"]>
		: {}
>;

export type {
	Register,
	Route,
	Router as TypedRouter,
	TypedRoute,
	RootRoute,
	RouteWithChildren,
	TypedRouteOptions,
} from "./router/types";
