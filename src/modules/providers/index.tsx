"use client"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { ReactNode } from "react"
import { SnackbarProvider } from "notistack"
import { SnackbarUtilsConfigurator } from "@modules/common/components/snackbar"

interface Props {
  children: ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <SnackbarUtilsConfigurator />
      <MobileMenuProvider>
        <CartDropdownProvider>
          {children}
        </CartDropdownProvider>
      </MobileMenuProvider>
    </SnackbarProvider>
  )
}
