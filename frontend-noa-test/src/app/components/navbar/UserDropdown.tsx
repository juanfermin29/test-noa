'use client';
import { USERS } from '@/app/config/constants/users.constants';
import { useUser } from '@/app/hooks/useUser';
import { User } from 'lucide-react'
import React from 'react'
import { DropdownMenu, } from 'radix-ui'
import "@radix-ui/themes/styles.css";
import "../../globals.css";

export const UsersDropdown = () => {
    const { user } = useUser();

    const handleUserChange = (selectedUser: string) => {
        localStorage.setItem("user", selectedUser);
        window.location.reload();
    };

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <User size={40}  width={100}/>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    align="end"
                    className="min-w-[220px] bg-white rounded-md shadow-lg py-1 will-change-[opacity,transform]"
                    sideOffset={10}
                >
                    {USERS.filter(usr => usr !== user).map((userOption) => (
                        <DropdownMenu.Item
                            key={userOption}
                            className="text-lg px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none"
                            onSelect={() => handleUserChange(userOption)}
                        >
                            Cambiar a {userOption}
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}
