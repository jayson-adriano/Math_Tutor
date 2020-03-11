<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="MATHtutorWeb.login" %>
<!DOCTYPE html>
<html>
<head>
    <title>MATHTutor</title>
	<meta charset="utf-8" />
    <link href="css/login.css" rel="stylesheet" />
    <script src="js/login.js"></script>
</head>
<body>
    <div class="login-page" style="text-align:center">
        <h1>MATHtutor</h1>
        <div class="form">
            <form class="login-form" runat="server" align="center">
                UserName:
                <asp:TextBox ID="txtBoxLoginUserName" runat="server"></asp:TextBox>
                Password
                <asp:TextBox ID="txtBoxLoginPassword" runat="server" TextMode="Password"></asp:TextBox>
                <br />
                <asp:Button ID="btnLogin" runat="server" Text="Login" OnClicK="btnLogin_Click" />
                   <%-- <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>--%>
            </form>
        </div>
    </div>
</body>
</html>
