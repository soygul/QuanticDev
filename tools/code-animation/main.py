from manim import *


def highlight_line(code: Code, line_from, line_to):
    if not line_to:
        line_to = line_from
    lines = range(line_from, line_to)

    return [ApplyMethod(code.code[line_no].set_opacity, 1 if line_no in lines else .3) for line_no in range(len(code.code))]


def create_code(code_src: str, ext: str = 'py'):
    file = f'code.{ext}'
    with open(file, 'w') as f:
        f.write(code_src)
    code = Code(file)
    with open(file, 'w') as f:
        f.write('')
    return code


# https://docs.manim.community/en/stable/reference.html
class AnimatedCode(Scene):
    config['pixel_height'] = 2160
    config['pixel_width'] = 3840

    def animation_template(self):
        code = create_code("""xxxxxx""")
        self.play(ShowCreation(code, run_time=10))
        self.wait()

        self.play(*highlight_line(code, 2, 6))
        self.wait()

    def construct(self):
        code1 = create_code("""db.connect('postgresql://localhost/testdb')
db.initialize()""")
        self.play(ShowCreation(code1, run_time=10))
        self.wait()

        code2 = create_code("""db.connect('postgresql://localhost/testdb').initialize()""")
        self.play(ShowCreation(code2, run_time=10))
        self.wait()
