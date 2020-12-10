from manim import *


def highlight_line(code: Code, line_from, line_to):
    if not line_to:
        line_to = line_from
    lines = range(line_from, line_to)

    return [ApplyMethod(code.code[line_no].set_opacity, 1 if line_no in lines else .3) for line_no in range(len(code.code))]


class AnimatedCode(Scene):
    config['pixel_height'] = 2160
    config['pixel_width'] = 3840

    def construct(self):
        code = Code("code.py")
        self.play(ShowCreation(code, run_time=10))
        self.wait()
        # self.play(*highlight_line(code, 2, 6))
        # self.wait()
        # self.play(*highlight_line(code, 8, 10))
        # self.wait()
