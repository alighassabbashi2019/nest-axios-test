import { Injectable } from '@nestjs/common';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8006/v1';
console.log('>>>>>>');
@Injectable()
export class AppService {
  onModuleInit() {
    this.getHello();
  }
  async getHello(): Promise<string> {
    try {
      console.log(axios.defaults);
      console.log(axios);
      const workspaces = await axios.get('/workspaces', {
        // proxy: false,
        headers: {
          Authorization: `Basic YWlyYnl0ZTpwYXNzd29yZA==`,
        },
      });
      console.log(workspaces);
      // const createdSource = await axios.post(
      //   '/sources',
      //   {
      //     configuration: {
      //       sourceType: 'postgres',
      //       port: 5433,
      //       ssl_mode: {
      //         mode: 'disable',
      //       },
      //       replication_method: {
      //         method: 'Xmin',
      //       },
      //       tunnel_method: {
      //         tunnel_method: 'NO_TUNNEL',
      //       },
      //       host: 'localhost',
      //       database: 'warehouse',
      //       username: 'postgres',
      //       password: '12121212',
      //     },
      //     name: 'test_source_connector',
      //     workspaceId: '5a54d31e-4f93-4792-9ef4-83c290c9c566',
      //   },
      //   {
      //     headers: {
      //       Authorization: `Basic YWlyYnl0ZTpwYXNzd29yZA==`,
      //     },
      //   },
      // );
      // console.log(createdSource.statusText, createdSource.data);
    } catch (err) {
      //console.log(err);
    }
    return 'Hello World!';
  }
}
