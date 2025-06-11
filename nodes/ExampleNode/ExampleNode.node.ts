import type {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';

export class ExampleNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Example Node',
		name: 'exampleNode',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'Basic Example Node',
		defaults: {
			name: 'Example Node',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'exampleCredentialsApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'string',
				noDataExpression: true,
				options: [
					{
						name: 'HTTP REQ TO ECHO SERVER',
						value: 'httpReqToEchoServer',
					}
				],
				default: 'httpReqToEchoServer',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [
							'httpReqToEchoServer',
						],
					},
				},
				options: [
					{
						name: 'Get',
						value: 'get',
						action: 'Get the echo',
						description: 'Get the response from the echo server',
						routing: {
							request: {
								method: 'GET',
								headers: {
									'nodeTest': '={{ $credentials.customHeader }}',
								},
								baseURL: 'https://n8n-node.free.beeceptor.com',
								url: '/node-test',
							},
						},
					},
				],
				default: 'get',
			},
		],
	};
}
