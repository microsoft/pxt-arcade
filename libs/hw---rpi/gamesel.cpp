#include "pxt.h"

#include <sys/types.h>
#include <dirent.h>
#include <sys/stat.h>
#include <stdio.h>

namespace control {

#define PROGDIR "/sd/prj"

//%
RefCollection *programList() {
    DIR *d = opendir(PROGDIR);
    auto res = Array_::mk();
    for (;;) {
        struct dirent *ent = readdir(d);
        if (!ent)
            break;
        int len = strlen(ent->d_name);
        if (len <= 4)
            continue;
        if (strcmp(ent->d_name + len - 4, ".elf") != 0)
            continue;
        ent->d_name[len - 4] = 0; // chop extension
        //DMESG("add: '%s'", ent->d_name);
        res->head.push((TValue)mkString(ent->d_name, -1));
    }
    closedir(d);
    return res;
}

/** Run specified user program. */
//%
void runProgram(String prog) {
    char *p;
    asprintf(&p, "%s/%s.elf", PROGDIR, prog->getUTF8Data());
    initialArgv = new char*[3];
    initialArgv[0] = p;
    initialArgv[1] = (char*)"--run";
    initialArgv[2] = 0;
    target_reset();
}

} // namespace control
