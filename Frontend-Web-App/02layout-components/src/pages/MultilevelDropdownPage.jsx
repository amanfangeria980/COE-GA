// import {
//     Cloud,
//     CreditCard,
//     Github,
//     Keyboard,
//     LifeBuoy,
//     LogOut,
//     Mail,
//     MessageSquare,
//     Plus,
//     PlusCircle,
//     Settings,
//     User,
//     UserPlus,
//     Users,
// } from "lucide-react";

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuPortal,
//     DropdownMenuSeparator,
//     DropdownMenuShortcut,
//     DropdownMenuSub,
//     DropdownMenuSubContent,
//     DropdownMenuSubTrigger,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "../components/ui/button";

// const MultilevelDropdownPage = () => {
//     return (
//         <div>
//             <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                     <Button variant="outline">Open</Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-56">
//                     <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuGroup>
//                         <DropdownMenuItem>
//                             <User className="mr-2 h-4 w-4" />
//                             <span>Profile</span>
//                             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                             <CreditCard className="mr-2 h-4 w-4" />
//                             <span>Billing</span>
//                             <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                             <Settings className="mr-2 h-4 w-4" />
//                             <span>Settings</span>
//                             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                             <Keyboard className="mr-2 h-4 w-4" />
//                             <span>Keyboard shortcuts</span>
//                             <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//                         </DropdownMenuItem>
//                     </DropdownMenuGroup>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuGroup>
//                         <DropdownMenuItem>
//                             <Users className="mr-2 h-4 w-4" />
//                             <span>Team</span>
//                         </DropdownMenuItem>
//                         <DropdownMenuSub>
//                             <DropdownMenuSubTrigger>
//                                 <UserPlus className="mr-2 h-4 w-4" />
//                                 <span>Invite users</span>
//                             </DropdownMenuSubTrigger>
//                             <DropdownMenuPortal>
//                                 <DropdownMenuSubContent>
//                                     <DropdownMenuItem>
//                                         <Mail className="mr-2 h-4 w-4" />
//                                         <span>Email</span>
//                                     </DropdownMenuItem>
//                                     <DropdownMenuItem>
//                                         <MessageSquare className="mr-2 h-4 w-4" />
//                                         <span>Message</span>
//                                     </DropdownMenuItem>
//                                     <DropdownMenuSeparator />
//                                     <DropdownMenuItem>
//                                         <PlusCircle className="mr-2 h-4 w-4" />
//                                         <span>More...</span>
//                                     </DropdownMenuItem>
//                                 </DropdownMenuSubContent>
//                             </DropdownMenuPortal>
//                         </DropdownMenuSub>
//                         <DropdownMenuItem>
//                             <Plus className="mr-2 h-4 w-4" />
//                             <span>New Team</span>
//                             <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//                         </DropdownMenuItem>
//                     </DropdownMenuGroup>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem>
//                         <Github className="mr-2 h-4 w-4" />
//                         <span>GitHub</span>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>
//                         <LifeBuoy className="mr-2 h-4 w-4" />
//                         <span>Support</span>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem disabled>
//                         <Cloud className="mr-2 h-4 w-4" />
//                         <span>API</span>
//                     </DropdownMenuItem>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem>
//                         <LogOut className="mr-2 h-4 w-4" />
//                         <span>Log out</span>
//                         <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//                     </DropdownMenuItem>
//                 </DropdownMenuContent>
//             </DropdownMenu>
//         </div>
//     );
// };

// export default MultilevelDropdownPage;

import React from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";

const MenuItem = ({ item }) => {
    if (item.submenu) {
        return (
            <DropdownMenuSub>
                <DropdownMenuSubTrigger className="flex items-center justify-between">
                    {item.label}
                    <ChevronRight className="ml-2 h-4 w-4" />
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                    {item.submenu.map((subItem, index) => (
                        <MenuItem key={index} item={subItem} />
                    ))}
                </DropdownMenuSubContent>
            </DropdownMenuSub>
        );
    }
    return <DropdownMenuItem>{item.label}</DropdownMenuItem>;
};

const MultilevelDropdown = () => {
    const menuItems = [
        { label: "Action" },
        { label: "Another action" },
        {
            label: "Submenu",
            submenu: [
                { label: "Submenu item 1" },
                { label: "Submenu item 2" },
                {
                    label: "Submenu item 3",
                    submenu: [
                        { label: "Multi level 1" },
                        { label: "Multi level 2" },
                    ],
                },
                { label: "Submenu item 4" },
                { label: "Submenu item 5" },
            ],
        },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="default">Dropdown button</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MultilevelDropdown;
