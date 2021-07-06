import { createMocks } from 'node-mocks-http';
import sample from '../../pages/api/sample';

describe('/api/sample', () => {
  test('when method "GET" returns message "Hello World"', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });

    await sample(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: 'Hello World',
        method: 'GET',
        success: true
      })
    );
  });

  test('when method "POST" returns message "Hello World"', async () => {
    const { req, res } = createMocks({
      method: 'POST'
    });

    await sample(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: 'Hello World',
        method: 'POST',
        success: true
      })
    );
  });

  test('when method "DELETE" returns message "Hello World"', async () => {
    const { req, res } = createMocks({
      method: 'DELETE'
    });

    await sample(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        message: 'Hello World',
        method: 'DELETE',
        success: true
      })
    );
  });

  test('when method is "PUT" returns success "false"', async () => {
    const { req, res } = createMocks({
      method: 'PUT'
    });

    await sample(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        success: false
      })
    );
  });
});
