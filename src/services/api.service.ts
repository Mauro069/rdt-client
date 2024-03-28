let API_URL = "https://rdt-api-sn8h.onrender.com";

export { API_URL };

class ApiService {
  private headers: Headers;
  private controller?: AbortController;

  constructor() {
    this.headers = new Headers();
    this.controller =
      typeof window !== "undefined" ? new window.AbortController() : undefined;
  }

  private addAuth() {
    const token = localStorage.getItem("[auth-token]");
    this.headers.set("Authorization", "Bearer " + token);
  }

  protected async _fetch(
    url: string,
    method: string,
    data?: any,
    needAuth?: true
  ) {
    if (needAuth) this.addAuth();

    if (!(data instanceof FormData)) {
      this.headers.set("Content-Type", "application/json");
    } else this.headers.delete("Content-Type");

    const options: RequestInit = {
      signal: this.controller?.signal,
      method: method,
      mode: "cors",
      cache: "no-cache",
      headers: this.headers,
      redirect: "follow",
      referrerPolicy: "no-referrer",
    };

    if (data !== undefined) {
      (options as any).body =
        data instanceof FormData ? data : JSON.stringify(data);
    }

    return await fetch(API_URL + url, options);
  }

  protected async _execute(method: string, uri: string, request?: any) {
    const record = await this._fetch(uri, method, request);
    // @ts-ignore
    if (record.status === 404) {
      throw new Error("Page Not found 404");
    }
    // @ts-ignore
    if (!record.ok) {
      // @ts-ignore
      const error = await record.json();
      throw new Error(error.message);
    }
    // @ts-ignore
    return await record.json();
  }

  public async Get<T>(uri: string, pager?: Pager): Promise<T> {
    const queries = this.createQuery(pager);

    return await this._execute("GET", `${uri}${queries}`);
  }

  public async Post<T>(uri: string, data: any): Promise<T> {
    return await this._execute("POST", uri, data);
  }

  public async Put<T>(uri: string, data: any): Promise<T> {
    return await this._execute("PUT", uri, data);
  }

  public async Delete<T>(uri: string, data?: any): Promise<T> {
    return await this._execute("DELETE", uri, data);
  }

  public async UploadFile<T>(uri: string, file: any): Promise<T> {
    const formData = new FormData();
    formData.append("file", file);
    return this._execute("POST", uri, formData);
  }

  public cancelRequest() {
    if (this.controller) {
      this.controller.abort();
    }
  }

  private createQuery(pager?: Pager) {
    if (!pager || !Object.keys(pager).length) {
      return "";
    }
    const query = Object.entries(pager)
      .map(([key, value]) => key + "=" + encodeURIComponent(value))
      .join("&");
    return `?${query}`;
  }
}

const service = new ApiService();

export default service;

export interface Pager {
  // page?: number;
  // limit?: number;
  // offset?: number;
  [key: string]: string;
}
