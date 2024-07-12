import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

export default function Restore() {
  const onFinish = (values) => {
    console.log("Valores del formulario:", values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200 transform transition-transform hover:scale-105">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Restablecer Contraseña
          </h2>
        </div>
        <Form
          name="restoreForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="mt-8 space-y-6"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu correo electrónico",
                type: "email",
              },
            ]}
          >
            <Input
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Correo Electrónico"
            />
          </Form.Item>
          <Link to="/login">
            <p className="font-extrabold text-gray-500 inline-block">
              Recorde mi contraseña
            </p>
          </Link>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="block w-full px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <p className="font-extrabold">Enviar solicitud</p>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
