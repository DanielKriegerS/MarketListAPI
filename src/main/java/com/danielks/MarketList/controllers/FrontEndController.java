package com.danielks.MarketList.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontEndController {
    @RequestMapping(value = { "/", "/{path:^(?!api).*$}", "/{path:^(?!api).*$}/**" })
    public String forward() {
        return "forward:/index.html";
    }
}
