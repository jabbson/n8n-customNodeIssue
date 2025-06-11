import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ExampleCredentialsApi implements ICredentialType {
	name = 'exampleCredentialsApi';
	displayName = 'Example Credentials API';

	documentationUrl = 'https://your-docs-url';

	properties: INodeProperties[] = [
		{
			displayName: 'Custom Header',
			name: 'customHeader',
			type: 'string',
			placeholder: 'n8n rules',
			default: '',
		}

	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				n8n: 'rocks',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			headers: {
				'credTest': '={{ $credentials.customHeader }}',
			},
			baseURL: 'https://n8n-node.free.beeceptor.com',
			url: '/',
		},
	};
}
