import { Navbar, Dropdown, Button, Link, Text } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function NavbarComponent() {
  const content = [
    {
      id: 1,
      content: "Home",
    },
    {
      id: 2,
      content: "Feed",
    },
    {
      id: 3,
      content: "Diary",
    },
  ];

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="underline"
        >
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </>
  );
}
