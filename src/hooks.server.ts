export let requestIp: string;

export const handle = async ({ event, resolve }) => {
	requestIp = event.getClientAddress();

	const respond = await resolve(event);
	return respond;
};

export default handle;
