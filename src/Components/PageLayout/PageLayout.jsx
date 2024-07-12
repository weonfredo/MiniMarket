import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, Avatar, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import sidebarItems from "./data";
import { Link } from "react-router-dom";
import tokenItem from "../../utils/TokenItem";

const { Header, Content, Footer, Sider } = Layout;

const PageLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState({
    // name: localStorage.getItem("username") || "Guest",
    avatar:
      "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
    // tipoUsuario: "administrador",
  });

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const transformMenuItems = (items) => {
    const filteredItems = items.filter((item) => {
      if (user.tipoUsuario === "ADMINISTRADOR") {
        return true;
      } else if (user.tipoUsuario === "DUEÑO") {
        return item.label !== "Administrador";
      } else if (user.tipoUsuario === "DIRECTOR") {
        return item.label !== "Administrador";
      } else if (user.tipoUsuario === "PROFESOR") {
        const excludeLabels = [
          "Administrador",
          "Seguridad",
          "Planificacion",
          "Caja",
          "Reportes",
          "Inscribir Alumno",
          "Inscribir Apoderado",
        ];
        return excludeLabels.includes(item.label) ? null : item;
      } else if (user.tipoUsuario === "SECRETARIA") {
        const excludeLabels = ["Administrador", "Seguridad", "Planificacion"];
        return excludeLabels.includes(item.label) ? null : item;
      }
      // return item.label == "Pagina Principal";
      return true;
    });

    return filteredItems.map((item) => ({
      key: item.key,
      icon: item.icon,
      label: item.to ? <Link to={item.to}>{item.label}</Link> : item.label,
      children: item.children ? transformMenuItems(item.children) : null,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/login";
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        {user.name}
      </Menu.Item>
      <Menu.Item key="1" icon={<UserOutlined />}>
        {user.tipoUsuario}
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout}>
        Cerrar sesión
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#fff" }}
        width={200}
      >
        <img
          src="https://ideogram.ai/assets/progressive-image/balanced/response/Bufag8EaRvmReG90aS5B1A"
          alt="Logo de la empresa"
        ></img>
        <Menu
          mode="inline"
          defaultSelectedKeys={[""]}
          defaultOpenKeys={[""]}
          style={{ height: "100%" }}
          items={transformMenuItems(sidebarItems)}
          // items={sidebarItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed}
              style={{ fontSize: "16px", width: 64, height: 64 }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dropdown menu={menu} placement="bottomRight">
              <Avatar src={user.avatar} />
            </Dropdown>
          </div>
        </Header>
        <Content className="m-4 p-4 bg-white ">{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Team programming ©{new Date().getFullYear()} Created by The
          chamaquitos EIRL
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
