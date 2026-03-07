import {getAPIKey} from "../api/auth.js";
/*
export function getAPIKey(headers: IncomingHttpHeaders): string | null {
  const authHeader = headers["authorization"];
  if (!authHeader) {
    return null;
  }

  const splitAuth = authHeader.split(" ");
  if (splitAuth.length < 2 || splitAuth[0] !== "ApiKey") {
    return null;
  }

  return splitAuth[1];
}
*/

import { describe, expect, test } from "vitest";


describe("API tests", () => {
	test("basic", ()=> {
		const fakeheader: IncomingHttpHeaders  = {
			'authorization' : 'Basic: losername:assword' 
			};
		expect(getAPIKey(fakeheader)).toBe(null);
	});
	test("actual",  ()=> {
		const realheader: IncomingHttpHeaders = {
			'authorization' : 'ApiKey zippideddoodah'
			};
		expect(getAPIKey(realheader)).toBe("zippideddoodah");
	});
	test("not even Apikey many params",  ()=> {
		const realheader: IncomingHttpHeaders = {
			'authorization' : 'ApiKei zippideddoodah '
			};
		expect(getAPIKey(realheader)).toBe(null);
	});
	test("not enough params",  ()=> {
		const realheader: IncomingHttpHeaders = {
			'authorization' : 'ApiKey'
			};
		expect(getAPIKey(realheader)).toBe(null);
	});
	test("not even auth params",  ()=> {
		const realheader: IncomingHttpHeaders = {
			'x-code' : 'ApiKey nothingtoseheere'
			};
		expect(getAPIKey(realheader)).toBe(null);
	});
});
